import Image from 'next/image';
import { GET_CHARACTERS } from '@/graphql/getCharacters';
import { getRandomInteger } from '@/utils';
import { getClient } from '@/apollo';

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_CHARACTERS,
  });

  if (!data.characters || !data.characters.info || !data.characters.results)
    return <div>Loading...</div>;

  const charactersCount = data.characters.info.count || 1;
  const pagesCount = data.characters.info.pages || 1;

  const itemsPerPage = charactersCount / pagesCount;

  const randomCharacterIndex = getRandomInteger(0, itemsPerPage);
  const randomCharacter = data.characters.results[randomCharacterIndex];

  if (!randomCharacter || !randomCharacter.name || !randomCharacter?.image)
    return <div>Something wrong.</div>;

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <span>Random character:</span>
      <h2>{randomCharacter.name}</h2>
      <Image
        src={randomCharacter.image}
        alt={randomCharacter.name}
        width={300}
        height={300}
      />
    </main>
  );
}
