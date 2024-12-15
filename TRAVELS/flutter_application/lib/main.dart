import 'package:flutter/material.dart';
import 'package:flutter_application/home_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  
  const MyApp ({Key? key}): super(key: key);

  @override
  Widget build(BuildContext context) {
                                       //every widget starts by capitals arguments by small
    return   MaterialApp(
      theme: ThemeData(),
      home:Rootpage() ,
    );   
  }
}

class Rootpage extends StatefulWidget {
  const Rootpage ({Key? key}): super(key: key);
  
  @override
  State<Rootpage> createState()=> _RootPageState();
}

class _RootPageState extends State<Rootpage> {
  
  int currentPage =0; 

  @override
  Widget build(BuildContext context){
    return  Scaffold(
      appBar: AppBar( 
        backgroundColor: Colors.blue,
        title: const Text ("TRAVELS"),
        ),
        body: const HomePage(),
        
    floatingActionButton: FloatingActionButton(
      onPressed: (){
        debugPrint("Action button pressed");
      },
      child: Icon(Icons.arrow_right),
      backgroundColor: Colors.blue,

      ),
    bottomNavigationBar: NavigationBar(
      destinations: const[
        NavigationDestination(icon: Icon(Icons.home),label: "Home"),
        NavigationDestination(icon: Icon(Icons.book_rounded),label: "Ongoing"),],
        
        onDestinationSelected: (int index){
          setState((){
          currentPage=index;
          });
        },
        selectedIndex: currentPage,
      ),
    );
    
  }
}

