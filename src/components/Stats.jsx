import {stats} from '../constants'
import styles from '../style'

const Stats = () => 
   (
    <div className={`flex-row flex-wrap ${styles.flexCenter} sm:mb-20 mb-6`}>
     {stats.map((stat) => (
      <div key={stat.id} className={`flex flex-1 flex-row justify-start items-center m-3 p-4`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
        <p  className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
     ))}
    </div>
  )


export default Stats
