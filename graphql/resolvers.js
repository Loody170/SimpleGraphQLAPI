let users = [
    {
      id: '01',
      name: 'Ahmed',
      age: 25,
      address: {
        street: 'Arbaeen',
        city: 'Jeddah',
      },
      contacts: [
        { type: 'email', value: 'ahmed@123.com' },
        { type: 'phone', value: '051234' },
      ],
      jobHistory: [
        { title: 'IT Intern', company: 'SmartIT', years: 1 },
        { title: 'Software Engineer', company: 'Albaik', years: 1 },
      ],
      hobbies: ['Gaming', 'Travelling', 'Coding'],
    },
    {
      id: '2',
      name: 'Amal',
      age: 28,
      address: {
        street: 'Olia St',
        city: 'Riyadh',
      },
      contacts: [
        { type: 'email', value: 'Amal@456.com' },
        { type: 'phone', value: '059091' },
      ],
      jobHistory: [
        { title: 'UX Designer', company: 'Physicality', years: 2 },
        { title: 'UX Lead', company: 'Techy', years: 1 },
      ],
      hobbies: ['Painitng', 'Reading', 'Swimming'],
    },
  ];
  
  const resolvers = {
    users: () => users,

    user: ({ id }) => users.find((user) => user.id === id),
    createUser: ({ input }) => {
      const newUser = { id: `${users.length + 1}`, ...input };
      users.push(newUser);
      return newUser;
    },

    updateUser: ({ id, input }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) throw new Error('User not found');
  
      users[userIndex] = { ...users[userIndex], ...input };
      return users[userIndex];
    },
    
    deleteUser: ({ id }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) throw new Error('User not found');
  
      users.splice(userIndex, 1);
      return `User with ID ${id} deleted successfully.`;
    },
  };
  
  module.exports = { resolvers };
  