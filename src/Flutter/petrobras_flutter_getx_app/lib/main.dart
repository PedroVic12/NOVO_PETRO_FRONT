import 'package:flutter/material.dart';

import 'MVC/Pages/PythonScreen.dart';
import 'api/Api_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Python e Flutter',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
     // home: PythonApiPage(),
     //home: MyPythonShellScreen()
     home: ApiPage(),
    );
  }
}
