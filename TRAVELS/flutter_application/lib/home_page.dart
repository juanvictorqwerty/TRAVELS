import 'package:flutter/material.dart'; //always

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(child: ElevatedButton(
      onPressed:(){},
        child: const Text("Reserve bus")),
        );
  }
} 