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
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.white, backgroundColor: Colors.blue, // Text color
            ),
            child: const Text("Reserve bus"),
          ),
          const SizedBox(height: 30), // Space between buttons
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.white, backgroundColor: Colors.green, // Text color
            ),
            child: const Text("Reserve plane"),
          ),
          const SizedBox(height: 30), // Space between buttons
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.white, backgroundColor: Colors.red, // Text color
            ),
            child: const Text("Reserve hotel"),
          ),
        ],
      ),
    );
  }
}