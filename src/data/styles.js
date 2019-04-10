const styles = () => ({
    input: {
      display: 'none',
    },
    purple:{
      borderRadius: "0px",
      outline: "none",
      color: "#FF9D00",
      fontSize: "24px",
      backgroundColor: '#210024',
      fontFamily: "'ZCOOL QingKe HuangYou', cursive;",
      '&:hover': {
        backgroundColor: '#5BC2E7',
      },
    },
    yellow:{
      borderRadius: "0px",
      outline: "none",
      color: "#210024",
      fontSize: "24px",
      backgroundColor: '#FF9D00',
      fontFamily: "'ZCOOL QingKe HuangYou', cursive;",
      '&:hover': {
        backgroundColor: '#5BC2E7',
      },
    },
    blue:{
      outline: "none",
      color: "#210024",
      fontSize: "20px",
      fontFamily: "'ZCOOL QingKe HuangYou', cursive;",
      '&:hover': {
        color: '#5BC2E7',
      },
    },
    transparent:{
      borderRadius: "0px",
      fontSize: "24px",
  
      outline: "none",
      color: "#333333",
      backgroundColor: 'transparent',
      fontFamily: "'ZCOOL QingKe HuangYou', cursive;",
  
      '&:hover': {
        backgroundColor: '#5BC2E7',
      },
      '&:focus': {
        color: '#ef8354',
        outline: "none",
  
      }
    }
  });
  export default styles;