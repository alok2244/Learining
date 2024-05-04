import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
//@ts-ignore
import { TopicTable } from '../../../public/asset/Sample_Data/Topic/TopicTable';
//@ts-ignore
import * as TopicData from '../../../public/asset/Sample_Data/Topic';
import { Button } from '@/components/ui/button';
import TopicPage from '@/components/Topic/TopicPage';


const Topic = () => {
  //@ts-ignore
  let { topicName, ctg } = useParams<{ topic: string, ctg }>();
  let logoUrl = "";
  const navigate = useNavigate(); // Using useNavigate hook to get the navigation function
  logoUrl = TopicTable[0][topicName]?.logo;

  //change categories
  //@ts-ignore
  const categories = (category) => {
    ctg = category
    navigate(`/${topicName}/${ctg}`); // Navigate using the topic name and topicName

  }
  const renderCategory = () => {
    const topic = TopicTable[0][topicName];
    // console.log(topic)
    const DataModuleString = topic?.DataModule;
    const DataModule = TopicData[DataModuleString]
    // console.log(typeof(DataModule))
    // console.log(DataModule[ctg])

    if (DataModule && DataModule[ctg]) {
      const categoryData = DataModule[ctg];
      // console.log(categoryData)

      return (
        <div className='w-[70%] z-[997] relative '>
          {/* Iterate over the properties of the category data */}
          {Object.keys(categoryData).map((key) => {
            if (key.startsWith('h')) {
              return (<div className='con_'>
                {console.log(categoryData[key])}
                {categoryData[key]}
              </div>)
              // React.createElement(`h${headingLevel}`, { key }, categoryData[key]);
            } else if (key.startsWith('p')) {
              // If the key starts with 'p', it's a paragraph
              console.log(categoryData[key])
              return <div className='py-2 px-7 '>{categoryData[key]}</div>;
            } else if (key.startsWith('list')) {
              // If the key is 'list', it's a list object
              console.log(key)
              return (
                <ul >
                  {/* Iterate over the list items */}
                  {Object.keys(categoryData[key]).map((listKey) => (

                    console.log(categoryData[key][listKey]),
                    <div className=' px-12'>

                      <li className='list-disc'>{categoryData[key][listKey]}</li>
                    </div>
                  ))}
                </ul>
              );

            } else {
              // Handle other types of data accordingly
              return <div key={key}>{categoryData[key]}</div>;
            }
          })}
        </div>
      );
    } else {
      return null;
      console.log("null") // Return null if category data is not found
    }
  };


  //@ts-ignore
  const renderContent = () => {
    const topic = TopicTable[0][topicName];
    const moduleName = topic?.module;
    if (moduleName && TopicData[moduleName]) {
      const moduleContent = TopicData[moduleName];
      return (
        <div className=''>
          {Object.keys(moduleContent).map((category) => (
            <div key={category} className='w-full mb-2 '>
              <div className='c1'>{category}</div>
              {Object.keys(moduleContent[category]).map((key) => (
                <div key={key} className='mt-3'>
                  <div className=' c2 group'>
                    <Button className='flex w-full' onClick={() => categories(moduleContent[category][key])}>
                      {moduleContent[category][key]}
                    </Button>
                    <span className="c3">&#10148;</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No data available for this topic.</div>;
    }
  };
  return (
    <div className='h-full'>
      {window.location.pathname === '/topics' ? (
        <TopicPage />
      ) : (
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
          <div className='fixed_outter_box'>
            <div className='scrollable_inner_box_left' style={{ scrollbarWidth: 'none' }}>
              <div className=' top-20 w-full absolute bg-gray-200 '>
                {renderContent()}
              </div>
            </div>
          </div>


          <div className=' fixed_outter_box'>
            <div className='scrollable_inner_box_right' style={{ scrollbarWidth: 'none' }}>
              <div className=' fix_head_right'>
                {ctg}
              </div>
              <div className=' top-[5.5rem] absolute mb-5 px-6 bg-gray-200'>
                {renderCategory()}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Topic;
