import image1 from './../../../assets/images/property1.jpg';
import image2 from './../../../assets/images/property2.jpg';
import image3 from './../../../assets/images/property3.jpg';
import image4 from './../../../assets/images/property4.jpg';

export const depositsData = {
  active: [
    {
      property: {
        address: {
          street: '771 Lost Round',
          city: 'Sacramento',
          state: 'CA',
        },
        imageUrl: image1,
      },
      moveInDate: '25 February 2020',
      rent: 3000.0,
      deposit: {
        amount: 9000.0,
        type: 'First, Last & Security',
      },
      status: {
        message: 'Awaiting Bank Processing',
        level: 2,
      },
    },
    {
      property: {
        address: {
          street: '1491 Jagged Arbor',
          city: 'San Antonio',
          state: 'TX',
        },
        imageUrl: image2,
      },
      moveInDate: '12 March 2020',
      rent: 2300.0,
      deposit: {
        amount: 4600.0,
        type: 'First & Last',
      },
      status: {
        message: 'Payment Processed',
        level: 3,
      },
    },
  ],
  closed: [
    {
      property: {
        address: {
          street: '1694 Noble Cape',
          city: 'Las Vegas',
          state: 'NV',
        },
        imageUrl: image3,
      },
      moveInDate: '3 February 2020',
      rent: 3300.0,
      deposit: {
        amount: 6900.0,
        type: 'Complete',
      },
      status: {
        message: 'Awaiting Bank Processing',
        level: 3,
      },
    },
    {
      property: {
        address: {
          street: '1141 Tawny Maze',
          city: 'Raleigh',
          state: 'NC',
        },
        imageUrl: image4,
      },
      moveInDate: '12 January 2020',
      rent: 2500.0,
      deposit: {
        amount: 7500.0,
        type: 'First, Last & Security',
      },
      status: {
        message: 'Expired: No Payment Received',
        level: 1,
      },
    },
  ],
};
