import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import QRCode from 'react-qr-code'

function QrCodeApp() {
    const [qrText, setQrText] = useState("Hello World");
  return (
    <div className='m-5 d-flex'>
      <div className='d-flex flex-column'>
        <span>Date: 22/07/09</span>
        {qrText.length > 0 && <QRCode value={qrText} size={100} />}
      </div>
      <div className='d-flex align-items-center'>
        <div className='d-flex flex-column'> 
        <span>Name: Nayana</span>
        <span>Date: 22/07/09</span>
        </div>
       
      </div>
      </div>
  );
}

export default QrCodeApp;




{/* <Container className='mx-auto'>
        <Tab.Container defaultActiveKey="text">
                <Row>
                  <Col sm={3}>
                    
                    <Nav variant="pills" className="flex-column">
                        
                    </Nav>
                    {qrText.length > 0 && <QRCode value={qrText} size={64} />}
				  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                        
                    </Tab.Content>
				  </Col>
                  
				</Row>
		</Tab.Container>
      </Container> */}