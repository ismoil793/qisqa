import Link from 'next/link';
import Image from 'next/image';
// import logo from '/public/logo.svg';
import qisqaLogo from '/public/qisqa.png';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Cruip">
      <Image src={qisqaLogo} alt="Cruip Logo" width={32} height={32} />
      {/*<span className="ml-2">qisqa.uz</span>*/}
    </Link>
  );
}
