class Base:
    def __init__(self, name):
      self.name = name
      
class Derived(Base):
    def __init__(self,name):
        super().__init__(name)
        
    def return_name(self):
        return self.name
    
d = Derived('mukesh')
print(d.return_name())

netwroking in neutron
https://www.youtube.com/watch?v=yqFpyubsYfE

Some commands used:
# ip info
ip a

# see routing table
ip route

# see policy routing rules
ip rule list

# see a particular routing table
ip route show table (table id)

# list linux bridges
brctl show

# packet capture, disable resolution, show mac/L2 info, filter on icmp
tcpdump -i (interface) -n -e icmp

# list iptables rules
iptables -S 

# iptables rules for the nat table only
iptables -S -t nat 

# see open flow rules for a particular ovs instance and flow table
ovs-ofctl dump-flows (ovs instance name) table=(table number)

# watch open flow rules counters move
watch -n.5  "ovs-ofctl dump-flows (ovs instance name) table=(table number) | grep -v n_packets=0"

# see fowarding db of ovs
ovs-appctl fdb/show (ovs instance name)

# see ovs instances and their ports
ovs-vsctl show

# see open flow port numbers
ovs-ofctl show (ovs instance name)

# list network namespaces
ip netns

# go to a bash shell for a particular network namespace
ip netns exec (namespace id) bash

# list neutron routers
neutron router-list 

# see where a neutron router is hosted
neutron l3-agent-list-hosting-router (router name)

# status of proxy arp
cat /proc/sys/net/ipv4/conf/(interface name)/proxy_arp

https://www.youtube.com/watch?v=c-x90PZFv8k