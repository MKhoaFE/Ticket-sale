export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.email}
        </div>
      );
    },
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 350,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 80 },
  {
    field: "from",
    headerName: "From",
    width: 120,
  },
  {
    field: "to",
    headerName: "To",
    width: 120,
  },
  {
    field: "date",
    headerName: "Date",
    width: 120,
  },
  {
    field: "time_go",
    headerName: "Start",
    width: 100,
  },
  {
    field: "time_arrival",
    headerName: "End",
    width: 100,
  },
  {
    field: "car_type",
    headerName: "Car Type",
    width: 100,
  },
  {
    field: "distance",
    headerName: "Distance",
    width: 80,
  },
  {
    field: "price",
    headerName: "Price ticket",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
  
];

export const bookingColumns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "hotelName",
    headerName: "HotelName",
    width: 200,
  },
  {
    field: "roomNumber",
    headerName: "RoomNumber",
    width: 120,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "startDate",
    headerName: "Check In",
    width: 250, 
  },
  {
    field: "endDate",
    headerName: "Check Out",
    width: 250,
  }
];

  