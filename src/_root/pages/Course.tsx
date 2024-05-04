import { HoverEffect } from '@/components/ui/card-hover-effect';
//@ts-ignore
import { Graduate } from '../../../public/asset/Sample_Data/Courses/CoursesFields';
import { useNavigate, useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const hasId = !!id;

  console.log(" 1) here is the id " + id)


  const handleItemClick = (subID: string ,courseId:string) => {
    navigate(`/course/${courseId}/${subID}`);
  };

  const renderContent = () => {
    if (!hasId) return null;

    const selectedCategory = Graduate.find((category) => category.title.toLowerCase() === id.toLowerCase());
    console.log("here is the category "+ selectedCategory)
    console.log("here is the id " + id)
    if (!selectedCategory) return <div>No courses found for {id}</div>;

    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-full max-w-screen-lg">
          <div className="grid grid-cols-4 gap-8">
            {selectedCategory.course.map((course, index) => (
              <div
                onClick={() => handleItemClick(course,id)}
                key={index}
                className='w-full h-20 flex justify-center items-center border-[1px] border-black hover:border-white hover:border-[4px] rounded-lg hover:text-white hover:bg-p-1 transition-all duration-300 ease-in-out cursor-pointer'
              >
                <p className="text-center font-bold" >{course}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='py-5'>
      {hasId ? (
        renderContent()
      ) : (
        <>
          <div className='py-2 bg-gray-400 w-full'>
            <h1>Graduate Courses.</h1>
          </div>
          <div className="max-w-6xl mx-auto w-full">
            <HoverEffect items={Graduate} />
          </div>

          <div className='py-2 bg-gray-400 w-full'>
            <h1>Post-Graduate Courses.</h1>
          </div>
          <div className="max-w-6xl mx-auto w-full">
            <HoverEffect items={Graduate} />
          </div>
        </>
      )}
    </div>
  );
};

export default Course;
