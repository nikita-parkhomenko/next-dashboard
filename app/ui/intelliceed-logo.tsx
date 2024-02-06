import Image from 'next/image';
import intelliceedLogo from '@/public/logo.svg';

export default function IntelliceedLogo() {
  return (
    <div>
      <Image priority src={intelliceedLogo} alt="company logo" />
    </div>
  );
}
