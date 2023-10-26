// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';


const Printing = () => {
    const ref = useRef(); {/* this ref variable will catch up the element which you want to print and connect to the MAIN HOOK to print the element. */ }
    return (
        // This is for mainContainer
        <>

            {/* this part is very important. it is the MAIN HOOK to print the element. */}
            <div className='flex flex-row justify-end m-5'>
                <ReactToPrint
                    copyStyles={true}
                    trigger={() => <button className='btn btn-sm btn-secondary'>Print</button>}
                    content={() => ref.current}
                />

            </div>

            {/* This is for supportContainer. it helps to print in a fine way */}
            <div className='printContainer p-20'>

                {/* This is the textContainer. this part will be printed */}
                <div ref={ref} className='textContainer'>

                    <section className=''>
                        <img src="https://i.pinimg.com/736x/c9/66/cb/c966cb7cfe24095ac9efdc031db2a165--dance-frogs.jpg" alt="" className='mx-auto h-1/3 w-1/3' />

                    </section>
                    <section className='p-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum in nulla id sollicitudin. Pellentesque tempor, magna id lobortis tincidunt, mi orci dictum velit, vel elementum dolor magna quis massa. Donec imperdiet lectus ipsum, quis laoreet metus suscipit vitae. Suspendisse malesuada pharetra massa, fermentum malesuada magna cursus in. Quisque in tellus ullamcorper, porttitor libero nec, auctor nunc. Duis pharetra venenatis nunc sit amet efficitur. Donec commodo lectus massa, id molestie turpis viverra nec. Pellentesque in eros accumsan, faucibus tellus sit amet, cursus urna.

                        Morbi tempor tincidunt imperdiet. Nulla facilisis, ex eu egestas gravida, sem massa fringilla lacus, ac rhoncus risus erat nec nunc. Morbi id suscipit eros, eget faucibus nibh. Integer ac mauris fermentum, aliquet elit vitae, rutrum diam. Nulla velit mi, hendrerit a tellus nec, egestas condimentum elit. In maximus blandit egestas. Aliquam faucibus quam quis nisi porta malesuada vel ac enim. Integer euismod justo non enim vulputate, at maximus odio efficitur.

                        Aliquam diam arcu, sollicitudin non nibh ut, pharetra tempus metus. Morbi tristique rhoncus eros at vestibulum. Donec enim sapien, rutrum maximus ligula eu, aliquet euismod lectus. Nunc congue eget justo non convallis. In porta rhoncus tincidunt. Vivamus pellentesque faucibus neque sed tempus. Phasellus nec ante suscipit, hendrerit dui vitae, volutpat ligula. Nam ut sem sed mauris tempor elementum non ut orci. Donec facilisis placerat elit vel ultricies. Phasellus vitae velit dapibus, rutrum mi sit amet, interdum ipsum. Suspendisse in eros sed quam elementum semper lacinia eget sem. Mauris id magna augue. Phasellus nec diam purus.

                        Praesent sagittis at massa vel volutpat. Vestibulum tincidunt sem id interdum hendrerit. Ut imperdiet, nisl id bibendum porttitor, ex sapien congue mi, eu convallis lacus ipsum in felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sagittis dictum sapien, id pretium ex vehicula vitae. Integer id iaculis elit. Duis eget purus vel arcu placerat eleifend.

                        Mauris pretium in enim in tincidunt. Quisque est turpis, pretium sodales justo id, venenatis elementum nisi. Donec mattis metus magna, ac consectetur dolor iaculis eu. Nunc fringilla facilisis massa at pharetra. Donec et ligula non nulla tincidunt rhoncus ac a augue. Mauris tincidunt tellus in elit condimentum, non scelerisque ipsum ultrices. Nulla facilisi. Cras nisl urna, dignissim id quam tincidunt, feugiat ornare quam. Praesent rutrum pulvinar hendrerit. Suspendisse venenatis mi et ultricies dapibus. Etiam in convallis neque. Pellentesque varius quis sem vestibulum sodales. Sed viverra dictum justo, eu faucibus elit dapibus non.
                    </section>


                </div>

            </div>
        </>



    );
};

export default Printing;