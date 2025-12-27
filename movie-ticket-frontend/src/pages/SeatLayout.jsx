import React, { useEffect } from 'react'
import Loading from '../components/Loading';
import { Clock } from 'lucide-react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { dummyShowsData, dummyDateTimeData, assets } from '../assets/assets';
import isoTimeFormat from '../lib/isoTimeFormat';
import { toast } from 'react-hot-toast';
import BlurCircle from '../components/BlurCircle';
import { ArrowRight } from 'lucide-react';
import MyBookings from './MyBookings';
const SeatLayout = () => {
  const navigate=useNavigate();
  const groupRows = [["A","B"],["C","D"],["E","F"],["G","H"],["I","J"]];
  const { id, date } = useParams();
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [show, setShow] = React.useState(null);

  const getShow = async () => {
    const show = dummyShowsData.find(show => String(show._id) === String(id));
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData,
      });
    }
  };

  useEffect(() => {
    getShow();
  }, [id]); // better to depend on id

  const handleSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast('Please select a time');
    }
    if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
      return toast("you can only slect 5 seats");
    }
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex mt-2 gap-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`h-8 w-8 rounded border border-amber-600 cursor-pointer ${
                selectedSeats.includes(seatId)
                  ? 'bg-amber-700 text-white'
                  : 'bg-white/20'
              }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      <div className="border-amber-600/30 border bg-pink-500/10 rounded-2xl p-8 pb-50">
        <p className="font-bold text-m p-3 mb-8">Available Timings</p>
        <div className="mt-5 space-y-1">
          {Array.isArray(show.dateTime[date]) &&
            show.dateTime[date].map((item) => (
              <div
                onClick={() => setSelectedTime(item)}
                key={item.time}
                className={`flex flex-row px-6 items-center gap-3 w-max cursor-pointer rounded-r-md transition ${
                  selectedTime?.time === item.time
                    ? 'bg-amber-700 text-white'
                    : 'hover:bg-amber-700/20 cursor-pointer'
                }`}
              >
                <Clock width={15} height={15} />
                <p className="text-sm">{isoTimeFormat(item.time)}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Seat layout */}
      <div className="flex flex-col items-center ml-30">
        <BlurCircle top="150px" left="250px" />
        <BlurCircle top="500px" right="300px" />
        <h1 className="text-4xl font-semibold text-balance mb-10">
          Select Your Seats
        </h1>
        <img src={assets.screenImage} alt="" />
        <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>

        <div className="flex flex-col items-center mt-10 text-sm text-gray-300">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6">
            {groupRows[0].map((row) => renderSeats(row))}
          </div>
          <div className="grid grid-cols-2 gap-11">
          {groupRows.slice(1).map((group, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-10 text-sm text-gray-300"
            >
              {group.map((row) => renderSeats(row))}
            </div>
          ))}
        </div>
        </div>

        <button onClick={()=>navigate('/mybookings')} className='flex items-center p-3 gap-2 mt-20 px-10 text-sm bg-amber-700 hover:bg-amber-700/20 transition rounded-full font-medium cursor-pointer active:scale-95'>
        Proceed To Checkout
        <ArrowRight width={20} height={20} /></button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}; // <-- this was missing

export default SeatLayout;
