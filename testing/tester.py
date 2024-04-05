import serial
import struct
import random
import time

# Define the serial port and baud rate
serial_port = "COM1"  # Change this to match your serial port
baud_rate = 115200

# Open the serial port
ser = serial.Serial(serial_port, baud_rate, timeout=1)

try:
    while True:
        # Generate random data for telemetry
        packetCount = random.randint(0, 100)
        mode = random.randint(0, 255)
        state = random.randint(0, 255)
        altitude = random.randint(0, 10000)
        temperature = random.randint(-20, 50)
        pressure = random.randint(800, 1200)
        voltage = random.randint(3, 5)
        gpsTime = random.randint(0, 24)
        gpsLatitude = random.randint(-90, 90)
        gpsLongitude = random.randint(-180, 180)
        gpsSats = random.randint(0, 12)
        tiltX = random.randint(-90, 90)
        tiltY = random.randint(-90, 90)
        rotZ = random.randint(0, 360)

        # Pack the telemetry data into a binary string
        telemetry_data = struct.pack(
            "f" * 14,
            packetCount,
            mode,
            state,
            altitude,
            temperature,
            pressure,
            voltage,
            gpsTime,
            gpsLatitude,
            gpsLongitude,
            gpsSats,
            tiltX,
            tiltY,
            rotZ,
        )

        # Send the telemetry data over the serial port
        ser.write(telemetry_data)

        # Print the sent telemetry data
        print("Sent telemetry data:", telemetry_data)

        # Wait for 1 second
        time.sleep(1)

except KeyboardInterrupt:
    print("Stopping script...")
    ser.close()
