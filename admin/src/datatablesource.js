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

export const ticketColumns = [
  { field: "_id", headerName: "ID", width: 100 },
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
    field: "price_ticket",
    headerName: "Price",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email user",
    width: 250, 
  },
  {
    field: "phone_user",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "seat_number_user",
    headerName: "Seat Number",
    width: 100,
  },
  {
    field: "type_ticket",
    headerName: "Ticket type",
    width: 100,
  },
  {
    field: "car_type",
    headerName: "Car type",
    width: 100,
  },
];

  