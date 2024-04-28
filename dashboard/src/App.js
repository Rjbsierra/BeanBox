import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/landingpage/dashboard';
import SalesItem from './pages/Sales/salesitem/salesitem';
import SalesSummary from './pages/Sales/salessummary/salessummary';
import Categories from './pages/Items/Categories/categories';
import ItemList from './pages/Items/ItemList/itemlist';
import InventoryCounts from './pages/Inventory/InventoryCounts/inventorycounts';
import InventoryHistory from './pages/Inventory/InventoryHistory/inventoryhistory';
import InventoryValuation from './pages/Inventory/InventoryValuation/inventoryvaluation';
import PurchaseOrders from './pages/Inventory/PurchaseOrders/purchaseorders';
import StockAdjustments from './pages/Inventory/StockAdjustments/stockadjustments';
import Employee from './pages/Employee/employee';
const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/salesitem' element={<SalesItem/>}/>
        <Route path='/salessummary' element={<SalesSummary/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/itemlist' element={<ItemList/>}/>
        <Route path='/inventorycounts' element={<InventoryCounts/>}/>
<Route path='/inventoryhistory' element={<InventoryHistory/>}/>
<Route path='/inventoryvaluation' element={<InventoryValuation/>}/>
<Route path='/purchaseorders' element={<PurchaseOrders/>}/>
<Route path='/stockadjustments' element={<StockAdjustments/>}/>
<Route path='/employee' element={<Employee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
