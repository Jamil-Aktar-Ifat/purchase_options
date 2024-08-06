import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 20,
      features: [
        "Access during staffed hours",
        "Locker room access",
        "Free initial fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 35,
      features: [
        "24/7 access",
        "Locker room access",
        "Unlimited group classes",
        "Free initial fitness assessment",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 50,
      features: [
        "24/7 access",
        "Locker room access",
        "Unlimited group classes",
        "Access to premium equipment",
        "Two personal training sessions per month",
        "Free initial fitness assessment",
        "Priority class booking",
      ],
    },
    {
      id: 4,
      name: "Family Membership",
      price: 90,
      features: [
        "24/7 access for up to 4 family members",
        "Locker room access",
        "Unlimited group classes",
        "Free initial fitness assessment for each family member",
        "Family discounts on additional services",
      ],
    },
    {
      id: 5,
      name: "Student Membership",
      price: 25,
      features: [
        "24/7 access",
        "Locker room access",
        "Unlimited group classes",
        "Free initial fitness assessment",
        "Discounted personal training sessions",
      ],
    },
    {
      id: 6,
      name: "Senior Membership",
      price: 25,
      features: [
        "24/7 access",
        "Locker room access",
        "Unlimited group classes",
        "Free initial fitness assessment",
        "Senior-specific fitness programs",
      ],
    },
    {
      id: 7,
      name: "Day Pass",
      price: 10,
      features: ["Access during staffed hours", "Locker room access"],
    },
    {
      id: 8,
      name: "Weekly Pass",
      price: 30,
      features: [
        "24/7 access",
        "Locker room access",
        "Access to group classes",
      ],
    },
  ];

  return (
    <div>
      <h1 className="font-medium text-xl">Best price in the town</h1>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
