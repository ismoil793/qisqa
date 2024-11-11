import PageIllustration from '@/components/PageEffects/PageIllustration';
import SignInOptions from '@/components/pages/signin/SignInOptions';
import Header from '@/components/Header';

export const metadata = {
  title: 'Qisqa.uz Signin',
  description: 'Sigin to qisqa.uz'
};

export default function SignIn() {
  return (
    <>
      <Header />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PageIllustration />
          <SignInOptions />
        </div>
      </section>
    </>
  );
}
