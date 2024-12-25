import 'package:flutter/material.dart'; //always

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
              // Add your reservation logic here
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
              // Add your reservation logic here
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
              // Add your reservation logic here
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