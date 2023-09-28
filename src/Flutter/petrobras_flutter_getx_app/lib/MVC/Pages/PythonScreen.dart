import 'package:flutter/material.dart';
import 'package:python_shell/python_shell.dart';

import '../Models/PythonApi.dart';

class PythonApiPage extends StatefulWidget {
  const PythonApiPage({super.key});

  @override
  State<PythonApiPage> createState() => _PythonApiPageState();
}

class _PythonApiPageState extends State<PythonApiPage> {
  final pythonAPI = PythonAPI();
  String _output = '';

  @override
  void initState() {
    super.initState();
    pythonAPI.initialize();
  }

  Future<void> _runPythonCode() async {
    //String result =         await pythonAPI.executeCode('print("Resultado do Python!")');
    String result = 'trying..';
    setState(() {
      _output = result;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Python Flutter Demo'),
      ),
      body: Center(
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(_output),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _runPythonCode,
        tooltip: 'Run Python',
        child: Icon(Icons.play_arrow),
      ),
    );
  }
}
