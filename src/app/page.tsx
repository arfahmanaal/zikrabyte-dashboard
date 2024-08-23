import LogSignBtn from "./loginBtn/page";

const Homepage = () => {
  return (<>
    <div>Homepage</div>
    <div style={{position:"absolute", zIndex:5, width:"95vw", display:"flex", flexDirection:"row", justifyContent:"flex-end" }}>
    <LogSignBtn />
    </div>
    </>
  )
}

export default Homepage