import { useLocation, useParams } from 'react-router-dom';
//@ts-ignore
import { ArticleData } from '../../../public/asset/Sample_Data/Articles/Article';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  console.log("HERE IS THE LOCTION" + location)
  const hasId = !!id;


  // Find the article based on the id parameter from the URL
  //@ts-ignore
  const article = id ? ArticleData.find((article) => article.id === parseInt(id)) : undefined;

  // Helper function to render topic content
  //@ts-ignore
  const renderTopicContent = (article, topicIndex) => {
    const topicKey = `t${topicIndex}`;
    if (!article[topicKey]) return null;

    const { h1, p1, ...subtopics } = article[topicKey];

    return (
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <h3 style={{ fontWeight: 'bold' }}>{h1}</h3>
        <div className='mb-2 mr-80'>{p1}</div>
        {/* Render subtopics if they exist */}
        {Object.keys(subtopics).map((subtopicKey) => {
          const subtopic = subtopics[subtopicKey];
          return (
            <div key={subtopicKey} style={{ marginTop: '20px', marginBottom: '20px' }}>
              <h3 style={{ fontWeight: 'bold' }}>{subtopic.h}</h3>
              <div className='mr-80'>{subtopic.p1}</div>
              {/* Recursively render further subtopics */}
              {renderTopicContent(subtopic, subtopicKey.slice(1))}
            </div>
          );
        })}
      </div>
    );
  };



  if (hasId) {
    // Render content based on the presence of 'id' parameter
    return (
      <div className='h-full' style={{ scrollbarWidth: 'none' }}>
        <div className="flex h-full ">
          <div className="left_box">
            {/* Left content */}
            <div className='my-[5%]'>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Table of Contents</h3>
              <ul>
                {article && article.table_of_content.map((
                  //@ts-ignore
                  topic, index
                ) => (
                  <li className="list-disc" style={{ fontSize: '15px' }} key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="right_box">
            {/* Right content */}
            <div className='my-[5%]'>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Table of Contents</h3>
              <ul>
                {article && article.table_of_content.map((
                  //@ts-ignore
                  topic, index
                ) => (
                  <li className="list-disc" style={{ fontSize: '15px' }} key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>


          <div className="center_box" style={{ scrollbarWidth: 'none' }}>
            {/* Center content (article) */}
            {article && (
              <div className='px-20'>
                <div className='h1-bold center m-12 mt-8'>{article.name}</div>
                {/* Iterate over each topic in the article */}
                {article.table_of_content.map((
                  //@ts-ignore
                  topic, index

                ) => (
                  <div className='relative overflow-auto' key={index}>
                    <div className="h2-bold">{topic}</div>
                    {/* Render the heading and paragraphs for the current topic */}
                    {renderTopicContent(article, index + 1)}
                  </div>
                ))}
              </div>
            )}
          </div>


        </div>

      </div>
    );
  } else {
    // If no 'id' parameter is present, render a welcome message
    return (
      <div>
        <h1>Welcome to the article page!</h1>
        <p>Here you can view articles. Please select an article from the list.</p>
      </div>
    );
  }


};

export default Article;
