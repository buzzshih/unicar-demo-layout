import { Tabs as FlowbiteTabs } from "flowbite-react";

type TabsProps = {
  tabsItems: {
    key: string;
    title: string;
    active: boolean;
    tabContent?: React.ReactNode;
  }[];
  onActiveTabChange: (index: number) => void;
  children?: React.ReactNode;
};

const Tabs = ({ tabsItems, onActiveTabChange, children }: TabsProps) => {
  return (
    <FlowbiteTabs onActiveTabChange={onActiveTabChange} style="pills">
      {tabsItems.map((tabItem) => (
        <FlowbiteTabs.Item
          key={tabItem.key}
          title={<span>{tabItem.title}</span>}
          active={tabItem.active}
        >
          {tabItem.tabContent}
          {children}
        </FlowbiteTabs.Item>
      ))}
    </FlowbiteTabs>
  );
};

export default Tabs;
