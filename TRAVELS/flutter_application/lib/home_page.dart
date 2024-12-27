import 'package:flutter/material.dart'; //always
import 'bus_reservation.dart'; // Import the bus reservation page
import 'plane_reservation.dart';
import 'hotel_reservation.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center, // Center the buttons vertically
        children: [
          ElevatedButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const BusReservation()), // Navigate to BusReservation
              );
            },
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.white, // Text color
              backgroundColor: Colors.blue, // Background color
            ),
            child: const Text("Reserve bus"),
          ),
          const SizedBox(height: 30), // Space between buttons
          ElevatedButton(
            onPressed: () {
              Navigator.push( 
                context,
                MaterialPageRoute(builder: (context)=> const PlaneReservation()),// Add your reservation logic here
              );
            },
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.white, // Text color
              backgroundColor: Colors.green, // Background color
            ),
            child: const Text("Reserve plane"),
          ),
          const SizedBox(height: 30), // Space between buttons
          ElevatedButton(
            onPressed: () {
              Navigator.push( 
                context,
                MaterialPageRoute(builder: (context)=> const HotelReservation()),// Add your reservation logic here
              );// Add your reservation logic here
            },
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.white, // Text color
              backgroundColor: Colors.red, // Background color
            ),
            child: const Text("Reserve hotel"),
          ),
        ],
      ),
    );
  }
}