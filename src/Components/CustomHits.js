import React, { useRef, useState } from 'react'
import { connectHits } from 'react-instantsearch-dom'
import { AnimatePresence, motion } from 'framer-motion'
import AnchorLink from './AnchorLink'
import Button from './Button'
import emailjs from '@emailjs/browser';

function Hits({ hits }) {

    const [order, setOrder] = useState(false)

    const [loading, setLoading] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true)
        const { user_name, user_email, message, user_tel, product_type, pick_up } = e.target.elements

        emailjs.sendForm('service_u9r8azm', 'template_jgpngql', form.current, 'B5dAhTyE5fWyrWHnh')
            .then(() => {
                setLoading(false)
                user_name.value = ""
                user_email.value = ""
                message.value = ""
                alert("Thanks for your response!!")
                setOrder(!order)
            }, (error) => {
                setLoading(false)
                alert(`
          Email was not sent.
          Error:
          ${error.text}
        `)
                setOrder(!order)
            });


    };

    return (
        <>
            <div className="w-full h-full" >
                {
                    hits.map((hit, index) => (
                        <React.Fragment key={`${hit.category} ${index}`}>
                            <div
                                className="w-full h-fit rounded-md p-5 cursor-pointer"
                            >
                                <h4
                                    onClick={() => setOrder(true)}>
                                    Category: {hit.category}
                                </h4>
                            </div>
                            <AnimatePresence>
                                {
                                    order && (
                                        <motion.div
                                            className='w-full h-full flex flex-col justify-center items-center bg-black/70 rounded-md fixed z-20 top-0 left-0'
                                            initial={{
                                                opacity: 0,
                                                scale: 0.95
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 1.05
                                            }}
                                        >
                                            <form
                                                className={`w-80 h-fit p-5 bg-white rounded-md grid grid-cols-1 gap-2 ${loading ? "after:absolute after:w-full after:h-full after:content-['Sending'] after:text-xl after:font-bold after:bg-white/60 after:flex after:flex-col after:justify-center after:items-center after:top-0 after:left-0" : null}`}
                                                ref={form} onSubmit={sendEmail}
                                            >
                                                <fieldset>
                                                    <label>
                                                        Full Name
                                                    </label>
                                                    <input type="text" placeholder='Gates Vert' name="user_name" required readOnly={loading} />
                                                </fieldset>
                                                <fieldset>
                                                    <label>
                                                        Email
                                                    </label>
                                                    <input type="email" placeholder='gatesvert@gmail.com' name="user_email" required readOnly={loading} />
                                                </fieldset>
                                                <fieldset>
                                                    <label>
                                                        Telephone Number
                                                    </label>
                                                    <input type="tel" placeholder='054126847' name="user_tel" required readOnly={loading} />
                                                </fieldset>
                                                <fieldset>
                                                    <label>
                                                        Type
                                                    </label>
                                                    <select name="product_type" className="form-select appearance-none block  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
                                                        {
                                                            hit.products.map((option, index) => (
                                                                <option value={option} key={index} >
                                                                    {option}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                </fieldset>
                                                <fieldset>
                                                    <label>
                                                        Pick up Date
                                                    </label>
                                                    <input type="date" name="pick_up" required readOnly={loading} />
                                                </fieldset>
                                                <fieldset>
                                                    <label>
                                                        Message
                                                    </label>
                                                    <textarea type="text" placeholder='Gates Vert' name="message" required readOnly={loading} />
                                                </fieldset>
                                                <fieldset className='grid grid-cols-1 md:grid-cols-2 gap-2 ' >
                                                    <Button
                                                        style=" w-full primary-btn"
                                                    >
                                                        Request Reservation
                                                    </Button>
                                                    <Button
                                                        style=" w-full secondary-btn border-red-400 text-red-400 "
                                                        click={() => setOrder(!order)}
                                                    >
                                                        Cancel
                                                    </Button>
                                                </fieldset>
                                            </form>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}
// {/* <div className="w-full" >
//                             {
//                                 hit?.products?.map((product, index) => (
//                                         <p key={index}>
//                                             {product}
//                                         </p>
//                                 ))
//                             }
//                         </div> */}
const CustomHits = connectHits(Hits)
export default CustomHits