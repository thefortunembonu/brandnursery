import PortfolioComponent from "./portfolioComponent";


interface PortfolioContainerProps {
    items: {
        title: string;
        img: string;
        link?: string;
        description: string;
        tags: string[];
    }[]
}

export default function PortfolioContainer  ({items}: PortfolioContainerProps) {
  return (              


        <div className='flex gap-12 flex-wrap pt-20 md:pt-24 justify-center md:justify-start'>
 {
            items.map((item, idx)=> {
                return <div key={idx}>
        <PortfolioComponent
         title={item.title}
         link={item.link}
         description={item.description}
          tags={item.tags} 
          img={item.img}/>
                </div>
        }
    )}
        </div>
       

 
  )
}