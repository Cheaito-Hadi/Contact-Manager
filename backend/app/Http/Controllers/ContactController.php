<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function addOrUpdateContact(Request $request, $id = "add"){
        if($id == "add"){
            $contact = new Contact;
        }else{
            $contact = Contact::find($id);
        }

        $contact->id = $request-> id;
        $contact->name = $request->name ? $request->name : $contact->name;
        $contact->phone_number = $request->phone_number ? $request->phone_number : $contact->phone_number;
        $contact->latitude = $request->latitude ? $request->latitude : $contact->latitude;
        $contact->longitude = $request->longitude ? $request->longitude : $contact->longitude;
        $contact->save();

        return response(["contacts" => $contact]);

    }

    function getContacts()
    {   
        $contacts = Contact::all();
        return response(["contacts" => $contacts]);
    }
}
