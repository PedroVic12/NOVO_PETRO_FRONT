import 'package:flutter/material.dart';
import 'package:petrobras_flutter_getx_app/MVC/Models/PythonApi.dart';

class MyPythonShellScreen extends StatefulWidget {
  @override
  _MyPythonShellScreenState createState() => _MyPythonShellScreenState();
}

class _MyPythonShellScreenState extends State<MyPythonShellScreen> {
  final PythonAPI _api = PythonAPI();
  String _output = '';

  @override
  void initState() {
    super.initState();
    _api.initialize();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Python Shell Exemplos'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            ElevatedButton(
              onPressed: () {},
              child: Text('Python: Olá, Mundo!'),
            ),
            ElevatedButton(
              onPressed: () {},
              child: Text('Versão do Python'),
            ),
            ElevatedButton(
              onPressed: () {},
              child: Text('Somar 5 + 7'),
            ),
            SizedBox(height: 20),
            Text('Saída: $_output'),
          ],
        ),
      ),
    );
  }
}
