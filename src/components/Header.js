import React from 'react';
import innoloft_logo from '..//assets/innoloft_logo.svg';
import Search from 'antd/es/input/Search';
import Input from 'antd/es/input/Input';
import inno_search from '..//assets/inno_search.svg';
import inno_messenger from '..//assets/inno_messenger.svg';
import inno_notifications from '..//assets/inno_notifications.svg';
import inno_down from '..//assets/inno_down.svg';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import {Avatar} from 'antd';


function Header() {
    const user = {
        firstName: "Username",
        lastName: "Lastname",
        profilePicture: "https://www.w3schools.com/howto/img_avatar.png"
    }

  return (
    <header className='flex flex-row bg-custom-blue h-14 w-full justify-center	'>

        <div className='flex flex-row w-11/12 ml-10'>

            <img src={innoloft_logo} alt='Innoloft' className='mt-4 h-6 ' />

            <div className='flex flex-row w-11/12 ml-20 justify-between hidden sm:flex'>
                <Input className=' bg-white ml-20 px-10 mt-4 hover:bg-white h-7 relative rounded-md' placeholder='Enter interests, keyword, company name, etc.' suffix={<img src={inno_search}/> } bordered={false} enterButton={false}/>
                <div className='flex items-center flex-row-reverse w-full'>
                    <img src={inno_down} className='ml-2 text-white h-4 relative'/>
                    <img
                    src={user?.profilePicture}
                    alt={user?.firstName}
                    height={20}
                    width={20}
                    className="rounded-full ml-6"
                    />                    
        <img src={inno_notifications} alt='notifications' className=' ml-6  h-5 relative' />
                <img src={inno_down} className='ml-2 text-white h-4 relative'/>
                    <text className='ml-6 text-white h-4 relative'>EN</text>
                    <img src={inno_messenger} alt='messenger' className='ml-6  h-5 relative' />
                </div>
            </div>

        </div>
    </header>
  )
}

export default React.memo(Header);
