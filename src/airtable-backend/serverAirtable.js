require('dotenv').config();
const express = require('express');
const Airtable = require('airtable');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: 'https://arunshashtri.com/' })); // Allow frontend origin

console.log('AIRTABLE_PERSONAL_ACCESS_TOKEN:', process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN ? 'Set' : 'Not set');
console.log('AIRTABLE_BASE_ID:', process.env.AIRTABLE_BASE_ID);

const base = new Airtable({ apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID
);

app.post('/api/save-to-airtable', async (req, res) => {
  console.log('Received request to save to Airtable:', req.body);
  try {
    const {
      fullName,
      email,
      whatsappNumber,
      dateOfBirth,
      timeOfBirth,
      gender,
      reportLanguage,
      currentChallenge,
      placeOfBirth,
      state,
      pincode,
      paymentId,
      orderId,
    } = req.body;

    if (!fullName || !email || !whatsappNumber || !dateOfBirth || !timeOfBirth || !gender || !reportLanguage || !placeOfBirth || !state || !pincode || !paymentId || !orderId) {
      console.error('Missing required fields:', req.body);
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await base('Orders').create([
      {
        fields: {
          FullName: fullName,
          Email: email,
          WhatsAppNumber: whatsappNumber,
          DateOfBirth: dateOfBirth,
          TimeOfBirth: timeOfBirth,
          Gender: gender,
          ReportLanguage: reportLanguage,
          CurrentChallenge: currentChallenge || '',
          PlaceOfBirth: placeOfBirth,
          State: state,
          Pincode: pincode,
          CreatedAt: new Date().toISOString(),
          PaymentId: paymentId,
          OrderId: orderId,
        },
      },
    ]);

    console.log('Data saved to Airtable successfully');
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving to Airtable:', error.message, error.stack);
    res.status(500).json({ error: 'Failed to save data', details: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));