import React, { useEffect } from 'react';
import { Table, Container, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
import '../InformacionProfesor/InformacionProfesor.css';
import axios from 'axios'
import { toast } from 'react-toastify';

const Lista = (props) => {

  const [data, setData] = React.useState ({
    datosTabla: null
  });
  const projectTable = () => {
      const url = `https://admin.apruebaexamenes.com/View-table-not-assigned`
  
      axios({
        method: 'post',
        url: url,
        headers: {'Content-Type':'application/json'},
      })
      .then(response => response.data)
      .then((data) => { 
        if (data !== null) {
          setData({
            ...data,
            datosTabla: data
          });
          // toast.success(`✓ - Registrado satisfactoriamente.`, {
          //   position: "top-right",
          //   autoClose: 2000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
        } else {
          toast.error(`✕ - Error al cargar su petición`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        toast.error(`✕ - ${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }

    const setTable = () => {
      return data.datosTabla.map((datax, i) => {
        return (
          <tr key={i} className="tablas-tr">
            <td>{datax.Code}</td>
            <td>{datax.Teacherbudget}</td>
            <td><Button color="primary" style={{backgroundColor: "transparent", borderColor: "transparent", verticalAlign: "bottom", color:"green"}}><i className="fa fa-eye fa-lg"></i></Button></td>
          </tr>
          )
      }) 
  }

  useEffect(() => {
    projectTable()
  }, [])

  return (
    <>
        <Container  fluid>
        <Table className="Tablas" hover responsive={true}>
                <thead>
                <tr>
                    <th>Código</th>
                    <th>Presupuesto</th>
                    <th>Info</th>
                </tr>
                </thead>
                <tbody>
                {data.datosTabla !== null ?
                    setTable()
                    :
                    null
                }
                </tbody>
            </Table>
        </Container>
    </>
  );
}
export default Lista;