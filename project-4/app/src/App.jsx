import { React, useState, useEffect } from 'react'

import styled from 'styled-components'
import SearchResult from './components/SearchResults/SearchResult'

 export const BASE_URL = "http://localhost:9000"

const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filteredData,setFilteredData]=useState(null)
  const [selectedButton,setselectedButton]=useState("all")

  //1.fetch data

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        setLoading(true)
        const res = await fetch(BASE_URL);
        const json = await res.json()
        setData(json)
        setFilteredData(json)
        setLoading(false)
      } catch (error) {
        setError("Unable to fetch data")
      }
    }
    fetchFoodData()
    // console.log(data)
  },[])

  //2.search food in input box

  const searchFood=(e)=>{
    const searchValue=e.target.value;
    console.log(searchValue)
    if(searchValue==""){
      setFilteredData(null);
    }
    const filter = data?.filter((food)=>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter)
  }

  //3.Filtered food

  const filterFood=(type)=>{
    if(type=="all"){
      setFilteredData(data);
      setselectedButton("all");
      return;
    }
    const filter = data?.filter((food)=>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter)
    setselectedButton(type)

  };

  //4.Button functionality
  const filterBtns=[
    {
      name:"All",
      type:"all",
    },
    {
      name:"Breakfast",
      type:"Breakfast",
    },
    {
      name:"Lunch",
      type:"Lunch",
    },
    {
      name:"Dinner",
      type:"dinner",
    }
  ]

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading...</div>

  return (
    <>
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className='search'>
          <input type="text" id="search" placeholder='search food..' onChange={searchFood} />
        </div>
      </TopContainer>

      <FilterContainer>
        {
          filterBtns.map(value=>(
            <Button 
            key={value.name}
            isSelected={selectedButton===value.type}
            onClick={()=>filterFood(value.type)}>{value.name}</Button>

          ))
        }
        
      </FilterContainer>


    </Container>
     <SearchResult data={filteredData}/>
    </>
  )
}

export default App;
export const Container = styled.div`
   /* background-color: #5A5959; */
   max-width: 1200px;
   margin:  0 auto;
`
const TopContainer = styled.section`
   min-height: 140px;
   display: flex;
   justify-content: space-between;
   padding: 16px;
   align-items: center;

   .search{
    input{
      border:1px solid red;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      background-color: transparent;
      padding: 6px 12px;
      &::placeholder{
        color: white;
      }
    }
   }
   @media (0 < width <680px ){
    flex-direction: column;
    height: 120px;
    background-color: #ffb7b7   ;
    margin-bottom: 22px;
   }
`
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 20px;
`
 export const Button = styled.button`
  background-color:${({isSelected})=> (isSelected ? '#f22f2f':' #FF4343')};
  outline:1px solid ${({isSelected})=> (isSelected ? '#fff':' #FF4343')};
  color:#fff;
  padding:6px 12px;
  border:none;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #f22f2f;
  }

`

