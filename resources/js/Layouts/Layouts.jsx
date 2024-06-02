import Chatbox from '@/Components/Chatbox';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Leftbar from '@/Components/Leftbar';
import TopLeft from '@/Components/TopLeft';

export default function Layouts({children}) {
  return (
<div id="main-wrapper">
    <TopLeft></TopLeft>
    <Chatbox></Chatbox>
    <Header></Header>
    <Leftbar></Leftbar>
    <div className="content-body">
        <div className="container-fluid">
            {children}
        </div>
    </div>
    <Footer></Footer>
</div>


  )
}
