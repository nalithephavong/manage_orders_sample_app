import { useEffect, useState } from "react";
import { 
    Container,
    Toolbar, 
    Divider
} from "@mui/material";
import Layout from "@/layouts/layout";
import CustomTable from "@/components/CustomTable";
import { 
  RowType, 
  HeaderCellType, 
  ToolbarActions, 
  UpdateType, 
  StatusType 
} from "@/templates/Interfaces";
import { AppConfig } from "@/templates/AppConfig";

//#region Order-Specific Settings
const ordersTableHeader: HeaderCellType[] = [
  {
    id: 'orderdate',
    numeric: true,
    disablePadding: false,
    label: 'Order Date',
  },
  {
    id: 'id',
    numeric: true,
    disablePadding: false,
    label: 'Order Number',
  },
  {
    id: 'customer',
    numeric: true,
    disablePadding: false,
    label: 'Customer',
  },
  {
    id: 'total',
    numeric: true,
    disablePadding: false,
    label: 'Total',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'shipdate',
    numeric: true,
    disablePadding: false,
    label: 'Ship Date',
  },
  {
    id: 'trackingnumber',
    numeric: true,
    disablePadding: false,
    label: 'Tracking Number',
  },
];

const ordersToolbarActions: ToolbarActions[] = [
  {
    name: "Add",
    title: "Create New Order",
    description: "",
    icon: "AddIcon",
    fields: [
      { id: "customer", label: "Customer", type: "text" },
      { id: "total", label: "Total", type: "text" }
    ],
    callback: (param) => { 
      fetch(`${AppConfig.apiUrl}/orders`, { 
        method:"POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(param)
      })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json); 
      })
      .catch((err:Error) => {
        console.error(err);
      });
    },
    tooltip: "Add new order"
  }
];

const ordersSelectedToolbarActions: ToolbarActions[] = [
  {
    name: "Update",
    title: "Update Order",
    description: "Update the following orders(s):",
    icon: "UpdateIcon",
    fields: [],
    callback: (param) => {
      const { data, selected } = param as UpdateType;
      (selected as string[]).forEach((id) => { 
        fetch(`${AppConfig.apiUrl}/orders/${id}`, { 
          method:"PATCH",
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(data)
        })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json); 
        })
        .catch((err:Error) => {
          console.error(err);
        });
      });
    },
    tooltip: "Update order(s)"
  },
  {
    name: "Delete",
    title: "Delete Order",
    description: "Delete the following order(s):",
    icon: "DeleteIcon",
    fields: [],
    callback: (param) => { 
      (param as string[]).forEach((id) => {
        fetch(`${AppConfig.apiUrl}/orders/${id}`, { method:"DELETE" })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          console.log(json); 
        })
        .catch((err:Error) => {
          console.error(err);
        });
      });
    },
    tooltip: "Delete order"
  }
];

const ordersStatusTypes:StatusType[] = [
  {
    id: "In Process",
    label: "In Process",
    color: "info"
  },
  {
    id: "On Hold",
    label: "On Hold",
    color: "warning"
  },
  {
    id: "Shipped",
    label: "Shipped",
    color: "secondary"
  },
  {
    id: "Ready To Ship",
    label: "Ready To Ship",
    color: "primary"
  },
  {
    id: "Canceled",
    label: "Canceled",
    color: "error"
  },
];
//#endregion

export default function Orders() {
  const [data, setData] = useState<RowType[] | null>(null);
  const [refresh, setRefresh] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${AppConfig.apiUrl}/orders`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let orders = json.orders as RowType[];
      let notificationList: string[] = [];
      orders.forEach((order) => {
        if (order.status == "Canceled" || order.status == "On Hold") {
          notificationList.push(`Order #${order.id} has status ${order.status}.`);
        }
      });
      setData(orders); 
      setNotifications(notificationList);
      setRefresh(false);
    })
    .catch((err:Error) => {
      console.error(err);
      setRefresh(false);
    });
  }, [refresh]);

  let title = "Orders";

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Layout title={title} notifications={notifications}>
        <Divider />
        <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <CustomTable 
              tableTitle="All Orders"
              rows={data}
              headerCells={ordersTableHeader}
              toolbarActions={ordersToolbarActions}
              selectedToolbarActions={ordersSelectedToolbarActions}
              defaultOrderBy="id"
              statusOpts={ordersStatusTypes}
              componentCallback={() => {setRefresh(true);}}
            />
          </Container>
    </Layout>
  );
}