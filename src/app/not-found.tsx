import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-site flex flex-col items-start py-32">
      <p className="font-mono text-sm text-muted">exit code 404</p>
      <h1 className="mt-2 font-mono text-3xl font-bold">page not found</h1>
      <Link href="/" className="btn mt-8">
        cd ~/
      </Link>
    </div>
  );
}
