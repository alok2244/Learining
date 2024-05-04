// TopicContents.tsx
import React from 'react';

interface TopicContentsProps {
  logoUrl: string;
  topicName: string;
  categoryData: any; // Update the type accordingly
}

const TopicContents: React.FC<TopicContentsProps> = ({ logoUrl, topicName, categoryData }) => {
  return (
    <>
      <div className=' fix_head_left '>
        <div className='flex w-full items-center justify-center '>
          <img
            src={logoUrl}
            alt="home logo"
            className='h-16 w-16 mx-2'
          />
          <div className='text-[50px] mb-2'>{topicName}</div>
        </div>
      </div>
      {/* Render content based on topic ID */}
      <div className='fixed_outter_box'>
        {/* left list */}
        {/* <div className='relative h-full ' style={{ scrollbarWidth: 'none' }}> */}
        <div className='scrollable_inner_box_left' style={{ scrollbarWidth: 'none' }}>
          <div className=' top-20 w-full absolute bg-gray-200 '>
            {/* Render category data here */}
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className=' fixed_outter_box'>
        {/* right side */}
        {/* <div className='relative h-full '> */}
        <div className='scrollable_inner_box_right' style={{ scrollbarWidth: 'none' }}>
          <div className=' fix_head_right'>
            {/* Render category name here */}
          </div>
          <div className=' top-[5.5rem] absolute mb-5 px-6 bg-gray-200'>
            {/* Render category data here */}
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default TopicContents;
