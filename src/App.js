import Header from './components/Header'
import './App.css';
import Item from './components/Item'

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="app__itemsContainer">
          <Item
          title="Lowest cost solar panel in America"
          desc="Money back gurantee"
          descLink=''
          backgroundImg={SolarPanels}
          leftBtntext='ORDER NOW'
          leftBtntLink=''
          rightBtntext='LEARN MORE'
          rightBtntLink=''
          twoBtnLink=''
          twoButtons='true'
          first
          />
          <Item
          title="Model S"
          desc="$69,420"
          descLink=''
          backgroundImg={ModelS}
          leftBtntext='ORDER NOW'
          leftBtntLink=''
          rightBtntext='LEARN MORE'
          rightBtntLink=''
          twoBtnLink=''
          twoButtons='true'
          />
          <Item
          title="Model 3"
          desc="$69,990"
          descLink=''
          backgroundImg={Model3}
          leftBtntext='ORDER NOW'
          leftBtntLink=''
          rightBtntext='LEARN MORE'
          rightBtntLink=''
          twoBtnLink=''
          twoButtons='true'
          />
          <Item
          title="Model X"
          desc="$70,420"
          descLink=''
          backgroundImg={ModelX}
          leftBtntext='ORDER NOW'
          leftBtntLink=''
          rightBtntext='LEARN MORE'
          rightBtntLink=''
          twoBtnLink=''
          twoButtons='true'
          />
          <Item
          title="Model Y"
          desc="$80,420"
          descLink=''
          backgroundImg={ModelY}
          leftBtntext='ORDER NOW'
          leftBtntLink=''
          rightBtntext='LEARN MORE'
          rightBtntLink=''
          twoBtnLink=''
          twoButtons='true'
          />
          <Item
          title="Solar for new roofs"
          desc="Money back gurantee"
          descLink=''
          backgroundImg={SolarRoof}
          leftBtntext='ORDER NOW'
          leftBtntLink=''
          rightBtntext='LEARN MORE'
          rightBtntLink=''
          twoBtnLink=''
          twoButtons='true'
          />
          <Item
          title="Accessories"
          desc="Money-back gurantee"
          descLink=''
          backgroundImg={Accessories}
          leftBtntext='ORDER NOW'
          leftBtntLink=''
          rightBtntext='LEARN MORE'
          rightBtntLink=''
          twoBtnLink=''
          twoButtons='true'
          />
        </div>
    </div>
  );
}

export default App;
