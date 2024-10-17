import { FaArrowAltCircleRight } from 'react-icons/fa';
import profile from '../../assets/profile2.jpg'

const Employee = () => {
    return (
        <div className="w-11/12 mx-auto my-8 mt-12">

            <div className="w-52 pt-5 bg-orange-200 rounded-xl h-96 shadow-lg flex items-center flex-col gap-2">
                <img className='rounded-full w-20 mx-auto' src={profile} alt="" />
                <h4 className='bg-orange-400 mt-4 px-4 rounded-md py-1 text-white'>HR Manager Emp</h4>

                <p className='text-sm text-center'>Admin and HR
                    <br />
                    Company 01
                </p>
               
               <button className='border px-4 py- rounded-md font-semibold flex items-center gap-1 mt-20  text-orange-400 bg-[#eae2b7]'>View details
                    <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </button>
               
            </div>
        </div>
    );
};

export default Employee;