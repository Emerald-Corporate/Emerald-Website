#include <DHT.h> 
#include <DHT_U.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <DHT_U.h>
#include "DHT.h"
#define DHTPIN A0
#define LM35PIN A1
DHT dht(DHTPIN, DHT11); 

void setup() 
{
pinMode(DHTPIN, INPUT); 
Serial.begin(9600); 
dht.begin(); 
}

void loop()
{
float dht11_umidade = dht.readHumidity(); 
float dht11_temperatura = dht.readTemperature();
Serial.print("Umidade:");
Serial.print(dht11_umidade); 
Serial.print("%");
Serial.print(";");
Serial.print("U-Temp:"); 
Serial.print(dht11_temperatura);
Serial.print(";");
float lm35_temperatura = analogRead(LM35PIN);
lm35_temperatura = lm35_temperatura * 0.00488;
lm35_temperatura = lm35_temperatura * 100; 
Serial.print("Temperatura:");
Serial.print(lm35_temperatura);
Serial.print(";");
Serial.println(); 
delay(5000); 
}
