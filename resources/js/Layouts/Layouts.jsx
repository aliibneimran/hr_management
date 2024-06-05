import Chatbox from '@/Components/Chatbox';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Leftbar from '@/Components/Leftbar';
import TopLeft from '@/Components/TopLeft';
import { useEffect } from 'react';

export default function Layouts({children}) {
    useEffect(() => {
        // Check if the reload flag is set in localStorage
        if (!localStorage.getItem("reloaded")) {
            // Set the flag in localStorage
            localStorage.setItem("reloaded", "true");

            // Reload the page
            window.location.reload();
        } else {
            // Remove the flag so that the reload can happen again in the future if needed
            localStorage.removeItem("reloaded");
        }
    }, []);
  return (
<div id="main-wrapper">
    <TopLeft></TopLeft>
    <Chatbox></Chatbox>
    <Header></Header>
    <Leftbar></Leftbar>
    <div className="content-body">
        <div className="container-fluid">
            <div id="preloader">
                <div>
                    <img src="assets/images/gif.gif" alt />
                </div>
            </div>
            {children}
        </div>
    </div>
    <Footer></Footer>
</div>


  )
}
