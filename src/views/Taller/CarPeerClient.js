import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';

const CarPeerClient = () => {
  return (
    <MDBContainer  fluid xs="12" sm="12" md="12" lg="12" xl="12" style={{verticalAlign:"middle", textAlignLast: "center"}}>
        <MDBTable>
          <MDBTableHead  color="primary-color" textWhite>
            <tr style={{backgroundColor:"#32338F"}}>
              <th>Nombre(s)</th>
              <th>Apellido(s)</th>
              <th>Cédula</th>
              <th>Célular</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>Color</th>
              <th>Placa</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>José Gregorio</td>
              <td>Sánchez Valderrama</td>
              <td>26131991</td>
              <td>+584122964776</td>
              <td>Hyundai</td>
              <td>Getz Gls</td>
              <td>2010</td>
              <td>Rojo</td>
              <td>RAP 44W</td>
            </tr>
            <tr>
              <td>Simón Antonio</td>
              <td>Rodríguez García</td>
              <td>27445668</td>
              <td>+584146652314</td>
              <td>Jeep </td>
              <td>Cherokee</td>
              <td>2012</td>
              <td>Vinotinto</td>
              <td>AE05CG</td>
            </tr>
            <tr>
              <td>Luis Alexander</td>
              <td>Isturiz Medina</td>
              <td>25368515</td>
              <td>+584166958441</td>
              <td>Chevrolet </td>
              <td>Aveo</td>
              <td>2007</td>
              <td>Verde</td>
              <td>RAP 44W</td>
            </tr>
            <tr>
              <td>Jesibell Andreina</td>
              <td>Sánchez Valderrama</td>
              <td>26131988</td>
              <td>+584126598321</td>
              <td>Chevrolet</td>
              <td>Aveo</td>
              <td>2006</td>
              <td>Morado</td>
              <td>VCG 77K</td>
            </tr>
          </MDBTableBody>
        </MDBTable>
    </MDBContainer>
  );
}

export default CarPeerClient;