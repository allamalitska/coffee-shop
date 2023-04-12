import Link from 'next/link';

export default function coffee() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        <Link href="/">Back to main menu</Link>
      </h1>
    </main>
  );
}
