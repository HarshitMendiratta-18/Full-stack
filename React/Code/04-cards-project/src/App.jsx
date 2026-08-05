
import Card from './components/card'




const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/3VvvFQelp2227r7S_-niz9c4LlMqnJjzUXkSu1OONhk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC82/MS80MS9nb29nbGUt/bG9nby12ZWN0b3It/NjA2ODYxNDEuanBn",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Banglore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/VEl3aMS074IZQQkN2i77qZvWyDRkzm3riKRj0GW7tCI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzU5OC9zbWFs/bC9taWNyb3NvZnQt/bG9nby1taWNyb3Nv/ZnQtaWNvbi1mcmVl/LWZyZWUtdmVjdG9y/LmpwZw",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/kq85AYCqqkhC6yJRoTqSycHvL53Wcq8qDhFSWmYxpZA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zZWFo/YXdrbWVkaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzAxL0ZpcnN0LWFw/cGxlLWxvZ28tMTAy/NHg1ODUucG5n",
    name: "Apple",
    datePosted: "1 day ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Gurgoan, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/Z3dK0FGR-slM1PhVb81cPN2ad8wtipBh62Z76_innC4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cG5nZ2FsbGVyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzL21l/dGEtbG9nby0wNC5w/bmc",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Banglore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wCsXkphbgTVitOK7NR_O8ZwD54_tPmUxKCDNQ7XMQY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/NDk3ODE2LnBuZz9m/PXdlYnAmdz0xMjg",
    name: "Amazon",
    datePosted: "6 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$44/hr",
    location: "Gujarat, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/EoQ0UsySO14q0bWBDy1DnK-fRYLaMzFupmWt9YXU2Xs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzAyOS9zbWFs/bC9uZXRmbGl4LWxv/Z28tbmV0ZmxpeC1p/Y29uLWZyZWUtZnJl/ZS12ZWN0b3IuanBn",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Goa, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/3BEd_6wZOC6JkO6G_xHQCiH3Xrx_V6n_6-2jbmmifxE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMyLzIvbnZpZGlh/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTMyMDAx/NS5wbmc",
    name: "NVIDIA",
    datePosted: "7 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/26ahKGn5zFKUZ6qMkuUy4d_pJ_aFZyNTJgHUTj1nZsA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0xOTkzLTIwMTQt/NzAweDM5NC5wbmc",
    name: "Adobe",
    datePosted: "2 days ago",
    post: "UI/UX Engineer",
    tag1: "Hybrid",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/wPejJSa8qyzkZdn6eYulJvr4MZVIu4XcSM32fZJ7M1I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA0/L09yYWNsZS1Mb2dv/LTEtNTAweDI4MS5w/bmc",
    name: "Oracle",
    datePosted: "8 days ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$47/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/A3wvTNE8u_4cKn2Jwn0bc6OLN9HKLsGnhNm_N7cmOmg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2FsZXNmb3JjZS5j/b20vbmV3cy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvMy8y/MDIxLzA1L1NhbGVz/Zm9yY2UtbG9nby5q/cGc_dz0xMDI0",
    name: "Salesforce",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$63/hr",
    location: "Mumbai, India"
  }
];

  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} logo={elem.brandLogo} date={elem.datePosted} location={elem.location}/>
        </div>
      })}
    </div>
    
  )
}

export default App
