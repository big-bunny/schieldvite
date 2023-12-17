// src/App.tsx
import React, { useEffect, useMemo, useState } from 'react';
import Slider from 'react-slick';
import schoolImage5 from '/images/sliders/slide-5.jpg';
import './index.css'; // Import your existing Tailwind CSS styles

interface CarouselItem {
  title: string;
  image: string;
  text: string;
}

interface Event {
  title: string;
  start: Date;
  end: Date;
  desc: string;
}

const LandingPage: React.FC = () => {
  const carouselData: CarouselItem[] = useMemo(
    () => [
      {
        title: 'Students and Principal 4',
        image: schoolImage5,
        text:
          'To overcome these challenges, Schield Center relies on the generous support of sponsors...',
      },
    ],
    []
  );

  const events: Event[] = useMemo(
    () => [
      {
        title: 'Trip to Court',
        start: new Date(2023, 0, 1),
        end: new Date(2023, 0, 3),
        desc: 'Visit to the local court for educational purposes.',
      },
      {
        title: 'Sports Day',
        start: new Date(2023, 0, 5),
        end: new Date(2023, 0, 7),
        desc: 'Annual sports event showcasing students’ talents.',
      },
      {
        title: 'Science Fair',
        start: new Date(2023, 2, 15),
        end: new Date(2023, 2, 17),
        desc: 'Students present their scientific projects.',
      },
      {
        title: 'Parent-Teacher Meeting',
        start: new Date(2023, 4, 10),
        end: new Date(2023, 4, 12),
        desc: 'Discussing students’ progress with parents.',
      },
      {
        title: 'Art Exhibition',
        start: new Date(2023, 6, 20),
        end: new Date(2023, 6, 22),
        desc: 'Showcasing students’ artistic talents.',
      },
    ],
    []
  );

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    // Add your logic for animations or interactions when the component mounts
    const animateIn = () => {
      const elementsToAnimate = document.querySelectorAll('.animate-in');
      elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('opacity-100');
        }, index * 200);
      });
    };

    animateIn();
  }, []);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen relative bg-gray-900 text-white">
      {/* Carousel */}
      <Slider {...sliderSettings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Content */}
      <div className="absolute inset-0 left-40 flex flex-col items-center justify-center z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-extrabold mb-4 animate-in opacity-0">
            Schield Centre
          </h2>
          <p className="text-xl mb-8 animate-in opacity-0">
            A place of learning and excellence in education.
          </p>
          <div className="flex justify-center items-center mb-5 animate-in opacity-0">
            <div className="mx-4">
              <p className="text-4xl font-bold">{216}</p>
              <p className="text-xl">Students</p>
            </div>
            <div className="mx-4">
              <p className="text-4xl font-bold">{15}</p>
              <p className="text-xl">Teachers</p>
            </div>
          </div>
          <a
            href="#events"
            className="animate__animated animate__bounce animate__delay-2s inline-block text-2xl font-semibold p-4 mt-4 bg-blue-500 hover:bg-blue-600 cursor-pointer"
          >
            Continue
          </a>
        </div>
      </div>

      {/* Events Section */}
      <div id="events" className="absolute left-0 top-0 h-full w-1/3 text-black p-8 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-4 animate-in opacity-0">
          2023 Events
        </h2>
        <div className="grid grid-cols-1 gap-2 animate-in opacity-0">
          {events.map((event, index) => (
            <div
              key={index}
              className={`border p-2 ${selectedEvent === event ? 'rounded-lg bg-green-400' : 'rounded-full'} cursor-pointer hover:bg-green-100`}
              onClick={() => handleEventClick(event)}
            >
              <h3 className="text-xl font-extrabold mb-2">{event.title}</h3>
              {selectedEvent === event && (
                <div className="text-sm text-gray-500 mb-2">
                  {`${event.start.toDateString()} - ${event.end.toDateString()}`}
                </div>
              )}
              {selectedEvent === event && <div className="text-sm">{event.desc}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
