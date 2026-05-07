import Show from "./components/Show"

const App = () => {
  const show = [
    {
      id: 1,
      title: "Seifeld Season 1",
      episodes: [
        { id: 1, title: "The Seinfeld Chronicles", views: 820000 },
        { id: 2, title: "The Stake Out", views: 790000 },
        { id: 3, title: "The Robbery", views: 760000 },
        { id: 4, title: "Male Unbonding", views: 730000 },
        { id: 5, title: "The Stock Tip", views: 810000 }
      ]
    },
    {
      id: 2, title: "Seinfeld Season 2", episodes: [
        { id: 1, title: "The Ex-Girlfriend", views: 880000 },
        { id: 2, title: "The Pony Remark", views: 910000 },
        { id: 3, title: "The Jacket", views: 940000 },
        { id: 4, title: "The Phone Message", views: 900000 },
        { id: 5, title: "The Apartment", views: 870000 },
        { id: 6, title: "The Statue", views: 920000 },
        { id: 7, title: "The Revenge", views: 950000 },
        { id: 8, title: "The Heart Attack", views: 890000 },
        { id: 9, title: "The Deal", views: 960000 },
        { id: 10, title: "The Baby Shower", views: 930000 },
        { id: 11, title: "The Chinese Restaurant", views: 980000 },
        { id: 12, title: "The Busboy", views: 910000 }
      ]
    },
    {
      id: 3, title: "Seinfeld Season 3", episodes: [
        { id: 1, title: "The Note", views: 1020000 },
        { id: 2, title: "The Truth", views: 990000 },
        { id: 3, title: "The Pen", views: 1050000 },
        { id: 4, title: "The Dog", views: 970000 },
        { id: 5, title: "The Library", views: 1010000 },
        { id: 6, title: "The Parking Garage", views: 1080000 },
        { id: 7, title: "The Cafe", views: 1000000 },
        { id: 8, title: "The Tape", views: 1030000 },
        { id: 9, title: "The Nose Job", views: 980000 },
        { id: 10, title: "The Stranded", views: 960000 },
        { id: 11, title: "The Alternate Side", views: 1100000 },
        { id: 12, title: "The Red Dot", views: 1040000 },
        { id: 13, title: "The Subway", views: 1090000 },
        { id: 14, title: "The Pez Dispenser", views: 1120000 },
        { id: 15, title: "The Suicide", views: 1070000 },
        { id: 16, title: "The Fix-Up", views: 1060000 },
        { id: 17, title: "The Boyfriend (Part 1)", views: 1150000 },
        { id: 18, title: "The Boyfriend (Part 2)", views: 1170000 },
        { id: 19, title: "The Limo", views: 1110000 },
        { id: 20, title: "The Good Samaritan", views: 1080000 },
        { id: 21, title: "The Letter", views: 1130000 },
        { id: 22, title: "The Parking Space", views: 1095000 },
        { id: 23, title: "The Keys", views: 1200000 }
      ]
    }
  ]

  return (
    <>
      <Show show={show} />
    </>
  )
}

export default App