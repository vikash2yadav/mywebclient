import React from 'react'
import SkillBox from '../../../components/SkillBox'

const Skills = () => {
  return (
    <>
      <div style={styles.maindiv}>
        <h1 className='text-xl mb-10 font-serif text-gray-100 font-semibold '>Skill</h1>
        <div style={styles.seconddiv}>
        <SkillBox className={'mx-5 text-gray-100 bg-gray-500  hover:text-gray-700 hover:shadow-md hover:-translate-y-0.5'} title="React Js" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" />
        <SkillBox className={'mx-5 text-gray-100 bg-gray-500  hover:text-gray-700 hover:shadow-md hover:-translate-y-0.5'} title="Node Js" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUEmiMSokRp7NEVnoYhL4b9Mbbdw9s-Wah0CZkE9O5g&s"/>
        <SkillBox className={'mx-5 text-gray-100 bg-gray-500  hover:text-gray-700 hover:shadow-md hover:-translate-y-0.5'} title="Express Js" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMoKObVKbBk_R7Ga4cZ7uTa1R8aHbhse0zUlOVen87Q&s"/>
        <SkillBox className={'mx-5 text-gray-100 bg-gray-500  hover:text-gray-700 hover:shadow-md hover:-translate-y-0.5'}  title="MongoDB" logo="https://e7.pngegg.com/pngimages/216/509/png-clipart-mongodb-node-js-npm-open-source-model-angularjs-leaf-leaf-logo.png"/>
        <SkillBox className={'mx-5 text-gray-100 bg-gray-500  hover:text-gray-700 hover:shadow-md hover:-translate-y-0.5'} title="My Sql" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEERgTHycB_bBwPpoVQLbDfplHfXwyLB5RJjo6v3VRQ&s"/>
        <SkillBox className={'mx-5 text-gray-100 bg-gray-500  hover:text-gray-700 hover:shadow-md hover:-translate-y-0.5'} title="Swagger" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlSaX4Fh1fqxmM-5MvIQOSZA8t0Fl5UybGVdYElZagg&s"/>
        </div>
      </div>
    </>
  )
}

const styles = {
  maindiv: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#1F2544',
    padding: "120px 100px",
    color: "white",
  },
  seconddiv: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-around',

  }
}

export default Skills