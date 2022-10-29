import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal';

export default function Home() {
  return (
    <div className='bg-[#171717] h-full overflow-y-scrolll 
    scrollbar-hide'> 
      <Head>
        <title>instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Modal />

         
           < Header />
           < Feed />
          
    </div>
  )
}
